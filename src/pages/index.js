import React from "react"
import LogoBrestJS from "../../public/static/brestjs200.png"
import LogoSlack from "../../public/static/Slack_Mark_Web.png"
import {create} from 'apisauce'

const api = create({
    baseURL:"https://slack.com/api/users.admin.invite"
});

const slackUri = "https://slack.com/api/users.admin.invite"
const tokenSlack = "xoxp-240389741204-241221196966-240801624533-11babdd970fe02fa89f898bc4eee407a"
// const channel = "C1LH5HGG0"
const channel = "C73CEGX2B"
class Invit extends React.Component {
    constructor() {
        super()
        this.state = {email:""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({email:e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        api.post('',{token:tokenSlack,email:this.state.email, channels:channel})
        
    }

    render () {
        return( 
            <div style={{marginTop:"10%"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={LogoBrestJS} width="150px" height="150px"/>
                    <img src={LogoSlack} width="150px" height="150px"/>
                </div>
                <div>
                    <div style={{width:"25%",margin:"0px auto"}}>
                        <p style={{textAlign:"center"}}>Join <b>Brest JS</b> commnity on Slack</p>
                        <form style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                            <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="email@yourdomain.com" style={{padding:"2%", textAlign:"center", marginBottom:"3%"}}/>
                            <button style={{padding:"2%", backgroundColor:"#E01563", border:"none", color:"white"}} onClick={this.handleSubmit}>GET MY INVITE</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invit