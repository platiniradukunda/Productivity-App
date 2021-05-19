import React from 'react';
import {useForm} from 'react-hook-form';
import * as $ from 'jquery';

function EnterTime({setTimeLeft, setIsPaused}) {
    // declaring 3 variables; 
    // register that keeps track of everything that goes into our input. Limits the input to no more than 45 minutes and create an error
    // handleSubmit only runs if there are no errors
    const{ register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data.minutes);
        // Use jQuery to clear out the minutes input field when the onSubmit function is called/triggered
        $("form").trigger("reset");
        // The number that is entered in the input field comes as seconds so it has to be converted to minutes. 
        // so that it can later be converted to minutes and remaining seconds. This happens in the Timer component.
        setTimeLeft(data.minutes*60);
        // onSubmit the isPaused needs to be changed to false so that the timer can run down
        setIsPaused(false);
    }

    return (
        <div className="enterTime">
            <p>Minutes: </p>
            {/* We need validate to be able to input decimals?? the handleSubmit will be triggered when the onSubmit function is called which will happen on form submission */}
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                {/* The user needs to input a value other wise the timer won't work. The minimum value the user can enter is 0.01 */}
                {/* The maximum number the user can use is 45 */}
                <input type="number" placeholder="Enter between 0-45 mins" name="minutes" id="minutes-input"
                    {...register("minutes", {
                        required: {value: true, message:"Please enter minutes..."},
                        min: {value: 0.01, message:"Please enter 0-45 minutes"},
                        max: {value: 45, message:"Please enter 0-45 minutes"},
                    })}/>
                <input type="submit" />
                {/* If there is an error in the form, then the corresponding message will be populated below the form on the DOM */}
                {errors.minutes && <p>{errors.minutes.message}</p>}
            </form>
        </div>
        
        
    );
}

export default EnterTime;