const {Component,mount,xml,useState} = owl

class Root extends Component {
    static template = xml`
    <div>
        <div class="col-lg-6 offset-lg-3 main-title">
            <div class="mt-5">
                <div class="input-group-lg mb-3 d-flex border py-2 rounded">
                    <input type="text" class="form-control-lg flex-fill w-100 border-0 py-1 mx-1" placeholder="Add Your Task" aria-label="Recipient's username" aria-describedby="button-addon2" t-model="state.name" t-att-value="state.name"/>
                    <input type="color" class="form-control-lg form-control-color border-0 bg-white p-0" id="exampleColorInput" t-att-value="state.color" title="Choose your color" t-model="state.color"/>
                    <button class="btn btn-outline-secondary border-0 mx-1" type="button" id="button-addon2" t-on-click="addTask"><i class="bi bi-plus-lg"></i></button>
                </div>
            </div>
        </div>
    </div>
    <ul class="d-flex flex-column alin-item-center mt-5 p-0">
        <t t-foreach="tasks" t-as="task" t-key="task.id">
            <li t-attf-style="background-color:#{task.color}" class="d-flex align-items-center justify-content-between border p-3 mb-2 rounded">
                <div class="form-check form-switch fs-5">
                    <input class="form-check-input" type="checkbox" value="" t-att-id="task.id"/>
                    <label class="form-check-label" t-att-for="task.id"><t t-esc="task.name"/></label>
                </div>
                <div>
                    <button class="btn btn-primary border-0 me-2 " type="button" id="button-addon2"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-danger border-0 " type="button" id="button-addon2"><i class="bi bi-trash"></i></button>                       
                </div>
            </li>
        </t>
    </ul> 

    `
    setup(){
        this.state = useState({
            name:"",
            color:"#ff0000",
            isComplated:false
        })
        this.tasks = useState([])
    }
    addTask(){
        if (!this.state.name){
            alert("please add name ")
            return
        }
        this.tasks.push({
            id:Math.random().toString().substring(2,12),
            name: this.state.name,
            color: this.state.color,
            isComplated: false,
        }) 

        let state = this.state
        this.state = {...state,name:"",color:"#ff0000"}
        console.log(this.tasks)

    } 
}
mount(Root,document.getElementById("root"));