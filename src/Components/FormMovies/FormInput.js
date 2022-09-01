import React from 'react';
import Card from '../UI/card';
import classes from './FormInput.module.css';
import Button from '../UI/Button';

const FormInput = () =>
{
    return (
        <Card className={classes.card}>
            <div className={classes.input_field}>
                <div className={classes.input_div}>
                <label htmlFor='title'>Title</label>
                <input id='title' type='text' ></input>
                </div>

                <div className={classes.input_div}>
                <label htmlFor='opening_text'>Opening Text</label>
                <textarea id='opening_text' type='text' ></textarea>
                </div>

                <div className={classes.input_div}>
                <label htmlFor='title'>Release date</label>
                <input id='title' type='text'></input>
                </div>

                <div className={classes.submit_div}>
                    <Button type='submit'>Add Movie</Button>
                </div>  
            </div>
        </Card>
    );
}

export default FormInput;