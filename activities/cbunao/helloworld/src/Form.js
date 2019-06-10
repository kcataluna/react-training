import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            address:'',
            school:'',
            remarks:'',
            file:null,
            name1: '',
            age1: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.showImage = this.showImage.bind(this);
    }

    handleChange(event) {
        // alert(event.target.name);
        const val = event.target.name;
        this.setState({ [val]: event.target.value });
    }

    showImage(event){
        this.setState({file:URL.createObjectURL(event.target.files[0])})
    }
    render() {
        let style ={
            width:'300px',
            height:'300px'
        };
        return (
            <div class="row">
                <div class="column">
                    <form>
                        Name <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Your name.." /><br />
                        Age: <input name="age" type="text" value={this.state.age} onChange={this.handleChange} placeholder="Your age.." />
                        Address:<input name="address" type="text" value={this.state.address} onChange={this.handleChange} placeholder="Your address.." />
                        School:<input name="school" type="text" value={this.state.school} onChange={this.handleChange} placeholder="Your school.." />
                        Remarks:<textarea name="remarks" placeholder="Your remarks.." value={this.state.remarks} onChange={this.handleChange}/>
                        Image:<input type="file" name="file" accept="image/png, image/jpeg" onChange={this.showImage}/><br/>
                        <img src={this.state.file} style={style} border="0"/>
                    </form>
                </div>
                <div class="column">
                    <form>
                        Name <input name="name1" type="text" value={this.state.name} placeholder="Your name.." disabled/><br />
                        Age: <input name="age1" type="text" value={this.state.age} placeholder="Your age.." disabled/>
                        Address:<input name="address1" type="text" value={this.state.address} placeholder="Your address.." disabled/>
                        School:<input name="school1" type="text" value={this.state.school} placeholder="Your school.." disabled/>
                        Remarks:<textarea name="remarks1" placeholder="Your remarks.." value={this.state.remarks} disabled/>  <br/>
                        <img src={this.state.file} style={style} border="0"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;