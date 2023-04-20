import Web3 from "web3";
import starNotaryArtifact from "../../build/contracts/StarNotary.json";

const Application = {
  web3: null,
  acc: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      
      const netId = await web3.eth.net.getId();
      const depNet = starNotaryArtifact.networks[netId];
      this.meta = new web3.eth.Contract(
        starNotaryArtifact.abi,
        depNet.address,
      );

    
      const accountsList = await web3.eth.getAccounts();
      this.acc = accountsList[0];
    } catch (error) {
      console.error("Not able to connect to contract or chain");
    }
  },

  setStatus: function(message) {
    const status = document.getElementById("status");
    status.innerHTML = message;
  },

  createStar: async function() {
    const { createStar } = this.meta.methods;
    const name = document.getElementById("starName").value;
    const id = document.getElementById("starId").value;
    await createStar(name, id).send({from: this.acc});
    Application.setStatus("New Owner of the Star is " + this.acc + ".");
  },

 
  lookUp: async function (){
    const { lookUptokenIdToStarInfo } = this.meta.methods;
    const tokenId = document.getElementById("tokenId").value;
    document.getElementById('status').style['color'] = 'black'
    document.getElementById('status').innerText = `Looking..`
    lookUptokenIdToStarInfo(tokenId).call()
        .then(starName => {
          document.getElementById('status').style['color'] = 'green'
          document.getElementById('status').innerText = `The name of the star: ${starName}`
        })
        .catch(reason => {
          document.getElementById('status').style['color'] = 'red'
          document.getElementById('status').innerText = `Error: ${reason}`
        })
  }
};

window.Application = Application;

window.addEventListener("load", async function() {
  if (window.ethereum) {

    Application.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); 
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545.",);

    Application.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"),);
  }

  Application.start();
});