const CoinRanking = (crypticCoin) => {
  
  
  return (
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 font-medium ">Coin</th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {crypticCoin?.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={c.image} alt={c.name} className="w-6 h-6" />
                <Link to={`/coin/${c.symbol}`}>
                  <span className="font-medium ml-8">{c.name}</span>
                </Link>
                </td>
                <td className="px-6 py-4 font-medium">${c.current_price.toLocaleString()}</td>
              </tr>
            )).slice(0,10)}
          </tbody>
        </table>
      </div>
  )
}
export default CoinRanking