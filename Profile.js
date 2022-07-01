import react, { useEffect, useState } from 'react';
import './Profile.css'
import six from "./image/logonew.svg";
import profile from "./image/profile.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Profile() {
    const navigate = useNavigate();
    //const Profile=(a)=>{navigate("/Profilelist")};

    const [array, setArrayFun] = useState([
        {
            "id": 5,
            "txtUsername": "AAAA",
            "dtBOB": "2022-05-25T18:30:00.000Z",
            "refReligion": null
        },
        {
            "id": 6,
            "txtUsername": "BBBB",
            "dtBOB": "2022-05-25T18:30:00.000Z",
            "refReligion": null
        }
    ])
    const handleProfileClick = (b) => {
        b.preventDefault();
        const url = "http://localhost:8000/search";
        const data = {
            name: "AAAA",

        };
        const header = {};
        console.log("url==>" + url)
        axios.post(url, data, header).then((res) => {
            console.log(res.data)
            alert(res.data.insertId)
            navigate("/profilelist");
        }).catch((err) => {
            console.log(err)
        });
    };
    useEffect(() => {
        const url = "http://localhost:8000/search";
        const data = {
            name: "BBBB",
        };
        const header = {};
        console.log("url==>" + url)
        axios.post(url, data, header).then((res) => {
            console.log(res.data)
        })
            .catch((err) => {
                console.log(err);
            });

    }, [])



    return (
        <div className='box1'>
            <div className='box2' >
                <div className='image'><img src={six} /></div>
                <ul>
                    <li><label>MY HOME</label></li>
                    <li><label>SEARCH</label></li>
                    <li><label>MATCHES</label></li>
                    <li><label>MAILBOX</label></li>
                    <li><label>UPGRADE NOW</label></li>


                </ul>

            </div>
            <div className='box3'>

                <input></input>
                <button onClick={(e) => { handleProfileClick(e); }}>SEARCH</button>
            </div>
            <div className='detail1'>
                {array.map((itm, indx) => {
                    return (
                        <div onClick={(e) => { handleProfileClick(e); }}>
                            <label>{JSON.stringify(itm)}{indx}</label>
                            <div className='detail2'> 
                                <div><img src={profile} width="250" height="300" /></div>

                               <div> <div><h1>NAME</h1></div>
                                <div><p>Age</p></div>
                                <div><p>Place</p></div>
                                <div><p>Religion</p></div>
                                <div><p>Ocuppation</p></div>
                                <div><p>Status</p></div></div>
                            </div>
                        </div>
                    )
                })
                }
            </div>




        </div>

    );
}