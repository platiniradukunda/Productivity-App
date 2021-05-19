import React from 'react';
import {useForm} from 'react-hook-form';
import * as $ from 'jquery';

function EnterTime({setTimeLeft}) {
    // declaring 3 variables; 
    // register that keeps track of everything that goes into our input. Limits the input to no more than 45 minutes and create an error
    // handleSubmit only runs if there are no errors
    const{ register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data.minutes);
        // to clear out the minutes input field when the onSubmit function is called
        $("form").trigger("reset");
        setTimeLeft(data.minutes*60);
    }

    return (
        <div className="enterTime">
            {/* Enter Timer */}
            <p>Minutes: </p>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <input type="number" placeholder="Enter between 0-45 mins" name="minutes" id="minutes-input"
                    {...register("minutes", {
                        required: {value: true, message:"Please enter minutes..."},
                        min: {value: 0.01, message:"Please enter 0-45 minutes"},
                        max: {value: 45, message:"Please enter 0-45 minutes"},
                    })}/>
                <input type="submit" />
                {errors.minutes && <p>{errors.minutes.message}</p>}
            </form>
        </div>
        
        
    );
}

export default EnterTime;