from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
import uvicorn

# Initializing FastAPI app object
app = FastAPI()

with open("model.pkl", "rb") as model_file:
    cryptik_model = pickle.load(model_file)

with open("scaler.pkl", "rb") as scaler_file:
    scaler = pickle.load(scaler_file)

# Input model
class ModelInput(BaseModel):
    std_rush_order: float
    avg_rush_order: float
    std_trades: float
    std_volume: float
    avg_volume: float
    std_price: float
    avg_price: float
    avg_price_max: float
    hour_sin: float
    minute_sin: float
    minute_cos: float
    avg_PV: float  

@app.get('/')  # test
def index():
    return {'message': 'Hello World!'}

@app.post('/cryptik_prediction')
def predict_pump_or_dump(input_data: ModelInput):
    avg_PV = input_data.avg_price * input_data.avg_volume  
    input_list = [
        input_data.std_rush_order,
        input_data.avg_rush_order,
        input_data.std_trades,
        input_data.std_volume,
        input_data.avg_volume,
        input_data.std_price,
        input_data.avg_price,
        input_data.avg_price_max,
        input_data.hour_sin,
        input_data.minute_sin,
        input_data.minute_cos,
        avg_PV  # using the computed avg_PV
    ]
    
    print("Received Data:", input_data)  # Debugging

    input_list = [np.nan if np.isinf(val) else val for val in input_list]
    input_list = [val if abs(val) < 1e30 else np.nan for val in input_list]  
    print("Processed Input List:", input_list)

    # Converting the list to a numpy array and reshaping
    input_array = np.array(input_list).reshape(1, -1)

    # Scaling the input data 
    scaled_input = scaler.transform(input_array)
    print("Scaled Input:", scaled_input)

    # Prediction
    prediction = cryptik_model.predict(scaled_input)[0]  
    print("Prediction:", prediction)

    # Return the result
    return {"prediction": "Pump&Dump" if prediction == 1 else "Happi happi"}

if __name__ == 'main':
    uvicorn.run(app, host='localhost', port=8000)