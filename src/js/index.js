import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import './../css/index.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            InjectionID:10,
            Address:"",
            TotalStatusToChange:0,
            TheListGet:[11,12],
            Name:"",
            AuthAddress:"",
            HosAddress:"",
            LookUpInfo:"",
            DisposeNum:0,
            DisposeProposal:0,
            Kind:"",
            Date:"",
            PassportInfo:"",
            TheListUserGet:[11,12],
            Specific:"",
            SpecificIndex:0,
        }

        if(typeof web3 != 'undefined'){
            console.log("Using web3 detected from external source like Metamask")
            this.web3 = new Web3(web3.currentProvider)
         }else{
            console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
         }
         const MyContract = web3.eth.contract([
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "enum Passport.TotalStatus",
                        "name": "totalStatus",
                        "type": "uint8"
                    }
                ],
                "name": "AuthorityChangeToatalStatusEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "i",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "enum Passport.InjectionStatus",
                        "name": "proposal",
                        "type": "uint8"
                    }
                ],
                "name": "AuthorityDisposeUncheckedInjectionEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "AuthorityGetUncheckedInjectionListEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "auth",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "kind",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "ID",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    }
                ],
                "name": "HospitalSubmitInfomationEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "LookUpEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "VaccinatedOneGetHisPassportEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "VaccinatedOneGetListEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "name": "deliverPassportEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "grantAuthorityEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "grantHospitalEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "i",
                        "type": "uint256"
                    }
                ],
                "name": "showSpecificInjectionEvent",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "enum Passport.TotalStatus",
                        "name": "totalStatus",
                        "type": "uint8"
                    }
                ],
                "name": "AuthorityChangeToatalStatus",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "i",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Passport.InjectionStatus",
                        "name": "proposal",
                        "type": "uint8"
                    }
                ],
                "name": "AuthorityDisposeUncheckedInjection",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "AuthorityGetUncheckedInjectionList",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "flist",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "cnt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalCnt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "herenumbersinWaitingList",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "authorityAddr",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "kind",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    }
                ],
                "name": "HospitalSubmitInfomation",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "InjectionID",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "LookUp",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "injectedIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Passport.TotalStatus",
                        "name": "totalStatus",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "VaccinatedOneGetHisPassport",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "_ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "enum Passport.TotalStatus",
                        "name": "_totalStatus",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "VaccinatedOneGetList",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "list",
                        "type": "uint256[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    }
                ],
                "name": "deliverPassport",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "grantAuthority",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "grantHospitals",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "i",
                        "type": "uint256"
                    }
                ],
                "name": "showSpecificInjection",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "_InjectionID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_kind",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "_ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "_date",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_injectedIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Passport.InjectionStatus",
                        "name": "_InjectionStatus",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "testt",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "n",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ])
         this.state.ContractInstance = MyContract.at('0x645779853F5b849D54139CbFEf9EeF2A35467542')

         window.a = this.state

    }

    myChangeHandler=(event)=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val});
    }

    AuthChangeTotalStatus=(event)=>{
        event.preventDefault();
        alert(this.state.Address+"  "+this.state.TotalStatusToChange);
        this.state.ContractInstance.AuthorityChangeToatalStatus(this.state.Address,this.state.TotalStatusToChange,{
            gas:300000
        },(err, result) => {
            cb()
         })
    }
    AuthGetList=(event)=>{
        event.preventDefault();
        console.log(this.state.TheListGet)
        this.state.ContractInstance.AuthorityGetUncheckedInjectionList((err, result) =>{
            if(result!=null){
                this.setState({
                    TheListGet:JSON.stringify(result[0])
                })
            }
        })
        // alert("get list");
        // this.state.TheListGet=this.state.ContractInstance.AuthorityGetUncheckedInjectionList()
        console.log(this.state.TheListGet)
    }
    DeliverPassport=(event)=>{
        event.preventDefault();
        this.state.ContractInstance.deliverPassport(this.state.Address,this.state.Name,{
            gas:30000
        },(err,result)=>{})
    }
    LookUp=(event)=>{
        event.preventDefault();
        this.state.ContractInstance.looUp(this.state.Address,{
            gas:30000
        },(err,result)=>{
            if(result!=null){
                this.setState({
                    LookUpInfo:JSON.stringify(result)
                })
            }
        })
    }
    AuthGrantAuth=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.grantAuthority(this.state.AuthAddress,(err,result)=>{})
    }
    AuthGrantHos=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.grantHospitals(this.state.HosAddress,(err,result)=>{})
    }
    AuthDispose=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.AuthorityDisposeUncheckedInjection(this.state.DisposeNum,this.state.DisposeProposal,(err,result)=>{})
    }

    HosSubmitInfo=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.HospHospitalSubmitInfomation(
            this.state.AuthAddress,this.state.Kind,this.state.Address,this.state.Date,
            (error,result)=>{

            }
        )
    }
    
    UserGetPassport=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.VaccinatedOneGetHisPassport((error,result)=>{
            if(result!=null){
                this.setState({
                    PassportInfo:JSON.stringify(result)
                })
            }
        })
    }
    UserGetList=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.VaccinatedOneGetList(this.state.SpecificIndex,(error,result)=>{
            if(result!=null){
                this.setState({
                    TheListUserGet:JSON.stringify(result)
                })
            }
        })
    }
    UserGetSpecific=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.showSpecificInjection((error,result)=>{
            if(result!=null){
                this.setState({
                    Specific:JSON.stringify(result)
                })
            }
        })
    }
    

    myStyle = {
        fontSize: 100,
        color: '#FF0000'
     };

    componentDidMount(){
        this.updateState()
        this.setupListeners()
  
        setInterval(this.updateState.bind(this), 1e3)
    }

    updateState(){
        this.state.ContractInstance.InjectionID((err, result) => {
            if(result != null){
               this.setState({
                  InjectionID: parseInt(result)
               })
            }
         })
    }

    setupListeners(){
       
     }

    
    returnInjectionID(){
        return this.state.InjectionID;
    }
    
    render(){
        return(
            <div>
            <div>In js</div>
            <div className="block" style={this.myStyle}>
               <b>Number of bets:</b> &nbsp;
               <span>{this.state.InjectionID}</span>
            </div>
            
            <div id="AuthorityPart" >
                <h2>Here you are Authority</h2>
                <nav>       
                    <a onclick="getDeliverPassport()">DeliverPassport</a>
                    <a onclick="getChangeTotalStatus()">ChangeTotalStatus</a>
                    <a onclick="getGetList()">GetList</a>
                    <a onclick="getGrantHospital()">GrantHospital</a>
                    <a onclick="getGrantAuthority()">GrantAuthority</a>
                    <a onclick="getLookUp()">LookUp</a>
                    <br/>
                    <a onclick="getDispose()">Dispose</a>
                </nav> 
            <section>
            <form id="DeliverPassport" onsubmit={this.DeliverPassport}>
                Deliver {this.state.Name}({this.state.Address}) a Passport here. 
                <br/>
                <br/>
                Enter the address of the user you need to send the passport:
                <br/>
                <input type="text" name='Address' onChange={this.myChangeHandler}/>
                <br/>
                Enter the name of the receiver:
                <br/>
                <input type="text" name='Name' onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
            
            <form id="ChangeTotalStatus" onSubmit={this.AuthChangeTotalStatus}>
                Change {this.state.Address} state to {this.state.TotalStatusToChange}
                <br/>
                <br/>
                Enter the address of the user:
                <br/>
                <input type="text" name='Address' onChange={this.myChangeHandler}/>
                <br/>
                Enter the status you want to change to (0-2):
                <br/>
                <input type="number" name='TotalStatusToChange' onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
            
            <form id="GetList" onSubmit={this.AuthGetList}>
                GetList here
                <br/>
                <br/>
                <p>{this.state.TheListGet}</p>
                <br/>
                <input type="submit" value="Get List"/>
            </form>
            <form id="GrantHospital" onsubmit={this.AuthGrantHos}>
                Grant Hospital {this.state.HosAddress} here
                <br/>
                <br/>
                Enter the address of the hospital to be granted:
                <br/>
                <input type="text" name="HosAddress" onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
        
            <form id="GrantHospital" onsubmit={this.AuthGrantAuth}>
                Grant Authority {this.state.AuthAddress} here
                <br/>
                <br/>
                Enter the address of the authority to be granted:
                <br/>
                <input type="text" name="AuthAddress" onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
            <form id="LookUp" onsubmit={this.LookUp}>
                Look Up user's passport
                <br/>
                <br/>
                Enter the user's address:
                <input type="text" name='Address' onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
                <p>{this.state.LookUpInfo}</p>
            </form>
            <form id="Dispose" onsubmit={this.AuthDispose}>
                Dispose unchecked vaccination
                <br/>
                <br/>
                Enter the index of the vaccination waiting for dispose:
                <br/>
                <input type="number" name="DisposeNum" onChange={this.myChangeHandler}/>
                <br/>
                Enter the proposal here:
                <br/>
                <input type="number" name="DisposeProposal" onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
    

            </section>
            </div>

            <div id="HospitalPart" >
            <h2>Here you are Hospital</h2>
            <nav>       
                <a onclick="HosDeliverPassport()">DeliverPassport</a>
                <a onclick="HosLookUp()">LookUp</a>
                <br/>
                <a onclick="SubmitInfo()">SubmitInfo</a>
            
            </nav>
            <section>
                <form id="HosDeliverPassport" onsubmit={this.DeliverPassport}>
                    Hospital DeliverPassport here
                    <br/>
                    <br/>
                    Enter the address of the user you need to send the passport:
                    <br/>
                    <input type="text" name="Address" onChange={this.myChangeHandler}/>
                    <br/>
                    Enter the name of the receiver:
                    <br/>
                    <input type="text" name="Name" onChange={this.myChangeHandler}/>
                    <input type="submit" value="submit"></input>
                </form>
                
                <form id="HosLookUp" onsubmit={this.LookUp}>
                    Hospital look up here
                    <br/>
                    <br/>
                    Enter the user's address:
                    <input type="text" name="Address" onChange={this.myChangeHandler}/>
                    <input type="submit" value="submit"></input>
                </form>
            
                <form id="SubmitInfo" onsubmit={this.HosSubmitInfo}>
                Submit Information here
                <br/>
                <br/>
                Enter the authority's address:
                <br/>
                <input type="text" name="AuthAddress" onChange={this.myChangeHandler}/>
                <br/>
                Enter the vaccine type:
                <br/>
                <input type="text" name="Kind" onChange={this.myChangeHandler}/>
                <br/>
                Enter the ID (address) of the user:
                <br/>
                <input type="text"/>
                <br/>
                Enter the date of vaccination:
                <br/>
                <input type="text" name="Date" onChange={this.myChangeHandler} placeholder={new Date().toLocaleTimeString()}></input>
                <input type="submit" value="submit"></input>
                </form>
                
            </section>
            </div>
            <div id="UserPart" >
            <h2>Here you are User</h2>

            <nav>       
                <a onclick="GetPassport()">GetPassport</a>
                <br/>
                <a onclick="UserGetList()">GetList</a>
                <br/>
                <a onclick="Specific()">SpecificVaccine</a>
            
            </nav>
            <section>
                <form id="GetPassport" onSubmit={this.UserGetPassport}>
                    Get your own vaccine passport here
                    <br/>
                    <br/>
                    <p>{this.state.PassportInfo}</p>
                    <br/>
                    <input type="submit" value="submit"></input>
                </form>
                
                <form id="UserGetList" onSubmit={this.UserGetList}>
                    Get your vaccination list here
                    <br/>
                    <br/>
                    <p>{this.state.TheListUserGet}</p>
                    <br/>
                    <input type="submit" value="submit"></input>
                </form>
            
                <form id="Specific" onsubmit={this.UserGetSpecific}>
                Search for your specific vaccination here
                <br/>
                <br/>
                <p>This is place for the specific vaccination by index</p>
                <br/>
                Enter the index of vaccination list:
                <br/>
                <input type="number" name="SpecificIndex" onChange={this.myChangeHandler}/>
                <input type="submit" value="submit"></input>
                </form>
                
            </section>
            </div>


            </div>
            
        )
    }
    
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)