import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { axiosInstance } from "../lib/axios";

const Coin = () => {
  
    const {symbol} = useParams();
    
    const [tokenAddress,setTokenAddress] = useState("0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5"); 

    const tokens = [
        {name:"usdt",address:"0x7169D38820dfd117C3FA1f22a697dBA58d90BA06"}, 
        {name:"uni",address:"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},
        {name:"link",address:"0x779877A7B0D9E8603169DdbD7836e478b4624789"},  
        {name:"usdc",address:"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"},   
        {name:"LINK",address:"0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5"},
    ]

    
    useEffect(()=>{
        const foundToken = tokens.find(token => token.name === symbol);
        if (foundToken) {
            setTokenAddress(foundToken.address);
        }
    },[symbol]);

    const {data:coinData} = useQuery({
        queryKey:["coinData",tokenAddress],
        queryFn:async () =>{
            const response = await axiosInstance.post(`/dataRoutes/name`,{tokenAddress});
            return response.data;
        }
    });

    console.log("coinData",coinData);
    
    return (
    <div>
        <CryptoCard  />
    </div>
  )
}
export default Coin