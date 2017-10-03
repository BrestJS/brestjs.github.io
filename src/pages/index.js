import React from "react"
import LogoBrestJS from "../../public/static/brestjs200.png"
import LogoSlack from "../../public/static/Slack_Mark_Web.png"

const slackUri = "https://slack.com/api"
const tokenSlack = "xoxp-54587920471-99433349491-240835807973-2db50a6f9ac49981ffdfcd0af4906983"
const channel = "C736CHM2S"
// const channel = "C73CEGX2B"
class Invit extends React.Component {
	constructor() {
		super()
		this.state = {
			email: "",
			textBtn: "GET MY INVITE",
			color: "#E01563",
			checkValidEmail: "disabled"
		};
		this.state.textBtn = "GET MY INVITE";
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (e) => {
		e.preventDefault();
		let checkValidEmail = this.state.checkValidEmail
		if(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)){
			checkValidEmail = "";
		}
		
		this.setState({email:e.target.value, checkValidEmail:checkValidEmail});
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		var data = new FormData();
		data.append( "email", JSON.stringify( this.state.email ) );
		data.append( "token", JSON.stringify( tokenSlack ) );
		data.append( "channels", JSON.stringify( channel ) );
		data.append( "pretty", JSON.stringify( 1 ) );
		fetch("https://slack.com/api/users.admin.invite",{
			method: "POST",
			headers:{
			},
			body:data
		}).then((res, other) => {
			if(res.status === 200){
				this.setState({textBtn:"WOOT, check your email !", color:"#68C200"})
			}
		}).catch((e) => {
			this.setState({textBtn:"An error survenued", status:"error"})
		})
		
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
												<input type="email" value={this.state.email} onChange={this.handleChange} placeholder="email@yourdomain.com" style={{padding:".9em", textAlign:"center", marginBottom:"1.2em"}}/>
												<button style={{padding:".9em", backgroundColor:this.state.color, border:"none", color:"white", textTransform:"uppercase"}} onClick={this.handleSubmit} className={this.state.status} disabled={this.state.checkValidEmail}>{this.state.textBtn}</button>
										</form>
								</div>
						</div>
				</div>
		)
	}
}

export default Invit