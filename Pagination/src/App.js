import React , { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card1';
import Paginate from "./Components/Pagination/Paginate";
import Pagination from "./Components/Pagination/Pagination";
const App = () => {

   
  const [data, setData] = useState([]);
  const userData = async () => {
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
      const actualData = await res.json();
      
    setData(actualData.data);
     
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userData();
  }, []);
 
     
  
const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
  const handlePageChange = page => {
      setCurrentPage(page);
        }
  const getPageData = () => {
    const paginationData = Paginate(data, currentPage, pageSize);
        return { totalCount: data.length, Data: paginationData }
          }
  const { totalCount, Data } = getPageData();
 
 
  

  return (
    <>
    {
      data.map((user,undex)=>{
              return(
                     <Card key={user.id}
                      fname={user.first_name}
                      lname={user.last_name}
                       email={user.email} 
                       img={user.avatar}/>
        )
      }
      )}
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange} />
       page {currentPage} of { totalCount / pageSize }
            </>                               
      )
    }
          
     
   
   
                                
  </>
  );
}

export default App;