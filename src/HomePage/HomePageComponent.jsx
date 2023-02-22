import { useEffect, useState } from "react"
import "./HomePageComponent.css"
function HomePage() {
    const [dataRes, setData] = useState([])

    useEffect(() => {
        showData();
    }, [])
    function Storting() {
        setData([...dataRes.sort((a, b) => {
            if (a.name.first+" "+a.name.last < b.name.first+" "+b.name.last) {
                return -1;
            }
            if (a.name.first+" "+a.name.last > b.name.first+" "+b.name.last) {
                return 1;
            }
            return 0;
        }

        )]);
        console.log(dataRes);
    }
    async function showData() {
        const res = await fetch("https://randomuser.me/api/?page=3&results=10&seed=abc");
        const data = await res.json();
        console.log(data)

        setData(
            [...dataRes, ...data.results]
        )
        console.log(dataRes)

    }

    return (<>
        <h1>hello</h1>
        <input type="text" onChange={(e)=>{const xs = dataRes.filter((data)=>{return data.name.first.toLowerCase().includes(e.target.value)});console.log(xs);setData([...xs])}} />

        {
            dataRes.map((d, idx) => {
                return (<><ul key={idx + "a"}>
                    <li key={idx + 1}><img src={d.picture.medium} alt="" /></li>
                    <li>{d.email}</li>
                    <li>{d.name.first + " " + d.name.last}</li>
                </ul></>)
            })

        }
        <button onClick={Storting}>Sort by name</button>
    </>)
}
export { HomePage }