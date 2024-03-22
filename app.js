const {Component,mount,xml} = owl

class Root extends Component {
    static template = xml`
    <div>
    <div class="col-lg-6 offset-lg-3 main-title">
        <div class="mt-5">
            <div class="input-group-lg mb-3 d-flex border py-2 rounded">
                <input type="text" class="form-control-lg flex-fill w-100 border-0 py-1 mx-1" placeholder="Add Your Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <input type="color" class="form-control-lg form-control-color border-0 bg-white p-0" id="exampleColorInput" value="#563d7c" title="Choose your color"/>
                <button class="btn btn-outline-secondary border-0 mx-1" type="button" id="button-addon2"><i class="bi bi-plus-lg"></i></button>
            </div>
        </div>
    </div>
</div>
<ul class="d-flex flex-column alin-item-center mt-5 p-0">
    <li class="d-flex align-items-center justify-content-between border p-3 mb-2 rounded">
        <div class="form-check form-switch fs-5">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
        </div>
        <div>
            <button class="btn btn-primary border-0 me-2 " type="button" id="button-addon2"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-danger border-0 " type="button" id="button-addon2"><i class="bi bi-trash"></i></button>                       
        </div>
    </li>
</ul> 
    `
}
mount(Root,document.getElementById("root"));