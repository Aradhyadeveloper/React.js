
import React from "react";
import { useState, useRef } from "react";

export default function Course() {

    const a1 = useRef(null)
    const b1 = useRef(null)
    const c1 = useRef(null)
    const a = useRef(null)
    const b = useRef(null)
    const c = useRef(null)
    const [join1, setJoin1] = useState("")
    const [join, setJoin] = useState("")
    const [join2, setJoin2] = useState(0)

    function Parches(event) {

        let g1 = [a1.current, b1.current, c1.current]
        let d1 = ""
        let v1 = 0
        for (let i = 0; i < g1.length; i++) {
            if (g1[i].checked) {
                d1 += g1[i].title + ", "
                v1 += +g1[i].value
            }
        }
        setJoin1(d1)

        let g = [a.current, b.current, c.current]
        let d = ""
        let v2 = 0
        for (let j = 0; j < g.length; j++) {
            if (g[j].checked) {
                d += g[j].title + ", "
                v2 += +g[j].value
            }
        }
        setJoin(d)
        setJoin2("total amount = " + (v1 + v2))
        event.preventDefault()
    }
    return (
        <>
            <style>{".raman{display:flex; justify-content:space-around;} .ram{color:red;} button{border:2px solid green; border-radius:10px;}"}</style>
            <div className="raman">
                <div className="ram">
                    <h2>Advance courses</h2>
                    <input type="radio" ref={a1} name="r1" title="Java (35000)" value="35000" />JAVA (35000)<br /><br />
                    <input type="radio" ref={b1} name="r1" title="Phythen (30000)" value="30000" />Phythen (30000)<br /><br />
                    <input type="radio" ref={c1} name="r1" title="JavaScript (25000)" value="25000" />Java Script (25000)<br />
                </div>
                <hr />
                <div className="ram">
                    <h2>Basic courses</h2>
                    <input type="checkbox" ref={a} title="C (5000)" value="5000" />C (5000)<br /><br />
                    <input type="checkbox" ref={b} title="C++ (10000)" value="10000" />C++ (10000)<br /><br />
                    <input type="checkbox" ref={c} title="HTML CSS (6000)" value="6000" />HTML CSS (6000)<br />
                </div>
                <hr />
                <div className="ram">
                    <h2>Select courses</h2>
                    <h3>{join1}</h3>
                    <h3>{join}</h3>
                    <button type="button" onClick={Parches}>Total Fees</button>
                    <h3>{join2}</h3>
                </div>
            </div>
            <hr />
            <hr />
        </>
    )
}








