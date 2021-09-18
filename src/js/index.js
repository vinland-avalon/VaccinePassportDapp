import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import './../css/index.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            InjectionID:10
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
         this.state.ContractInstance = MyContract.at('0x6bA2742E6143D4963f06dd235624C6F4c890D411')

         window.a = this.state

    }

    componentDidMount(){
        this.updateState()
        this.setupListeners()
  
        setInterval(this.updateState.bind(this), 7e3)
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
            <div className="block">
               <b>Number of bets:</b> &nbsp;
               <span>{this.state.InjectionID}</span>
            </div>
            </div>
        )
    }
    
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)