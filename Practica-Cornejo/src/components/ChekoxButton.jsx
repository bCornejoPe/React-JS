const CheckButon =()=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    return(

        <div>
        <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
<label class="btn btn-primary" for="btn-check">Single toggle</label>

<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off"/>
<label class="btn btn-primary" for="btn-check-2">Checked</label>

<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled/>
<label class="btn btn-primary" for="btn-check-3">Disabled</label>
</div>
     
    )
} 
export default CheckButon