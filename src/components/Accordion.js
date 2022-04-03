import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuesAns from './QuesAns';


// async function fetchData() {
//     // const response = await fetch('https://opentdb.com/api.php?amount=10&category=18');
//     // const data = await response.json();
//     const response = fetch('https://opentdb.com/api.php?amount=10&category=18')
//     .then(res => {
//       if(res.ok) {
//         return res;
//       } else {
//         throw Error(`Request rejected with status ${res.status}`);
//       }
//     })
//     .catch(console.error)
//     const data = await response.json();
//     return data.results;
//   }



// const Accordion = async() => {

//     const [quesAns, setquesAns] = useState({
//         d: []
//     });

//     useEffect(() => {
//         axios.get('https://opentdb.com/api.php?amount=10&category=18')
//         .then(response => {
//             const results = response.data.results;
//             this.setquesAns({results});
//         })
//       }, []);

    

//     return (
//         <>
//         <div>
//             {
//                 quesAns.map((item) => {
//                     return item.question;
//                 })
//             }
//         </div>
//         </>
//     )
// }

const Accordion = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=6&category=18')
            .then(res => {
                // console.log(res.data.results)
                setData(res.data.results);
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        <>
        <section className="main-section">
            <div className="main-div">
                <h2>Computer Science Interview</h2>
                {
                    data.map((item,index) => {
                       return <QuesAns key={index} {...item}/>
                    })
                }
            </div>
        </section>
        </>
    )
}

export default Accordion;