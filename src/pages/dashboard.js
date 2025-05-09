import Navbar from "../components/navbar";
import AboveTable from "../components/aboveTable";
import Table from "../components/table";
export default function Dashboard(){
    return(
       <div>
            <Navbar/>
            <AboveTable/>
            <Table/>
       </div>
    );
}