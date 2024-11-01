import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="../social-icons/Laura.jpg" className="profile" alt="image of Michaella, woman with peach hair and glasses" />
            <h3 className="my-name">Michaella Rodriguez</h3>
            <p className="job-title">Frontend Developer</p>
            <a className="website">laurasmith.website</a>
            <div className="btn">
                <img src="./Icon.png" className="icon" />
                <p>Email</p>
            </div>
        </div>
    )
}