import React from "react"

const slackUri = "https://slack.com/api"
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
		fetch("https://slack.com/api/users.admin.invite?token=xoxp-240389741204-241221196966-240801624533-11babdd970fe02fa89f898bc4eee407a&pretty=1&email="+this.state.email,{
			headers:{
			}
		}).then((res) => {
			console.log(res)
			if(res.status === 200){
				console.log("ça marche !!!")
			
			}
		})
		
	}

	render () {
		return( 
				<div style={{marginTop:"10%"}}>
						<div style={{display:"flex", justifyContent:"center"}}>
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