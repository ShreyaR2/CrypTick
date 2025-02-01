import { useQuery } from "@tanstack/react-query"

const AllCoins = () => {
  
    const {data: crypticCoin,isError,isLoading} = useQuery({queryKey:["crypticCoin"]});

    
    return (
    <div className="text-amber-400">AllCoins</div>
  )
}
export default AllCoins