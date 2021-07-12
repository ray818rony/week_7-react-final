import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseability, chooseName } from '../../redux/slices/rootSlice';
import { input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../CustomHooks';


interface HeroFormProps {
    id?: string;
    data?: {}
}

interface HeroState {
    name: string;
    Ability: string;
}

export const MarvelForm = (props: HeroFormProps) => {

    const dispatch = useDispatch();
    let { heroData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<HeroState>((state: { name: any; }) => state.name)
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data: any, event: any) => {
        console.log(props.id)
        console.log(props)
        if (props.id!) {
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            console.log(store.getState())
            // those 2 are in redux slice root slice
            dispatch(chooseability(data.ability))
            // dispatch(chooseDescribtion(data.description))
            server_calls.create(store.getState())
            console.log(data.ability)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero Name</label>
                    <input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="ability">Main Ability</label>
                    <input {...register('ability')} name="ability" placeholder="ability" />
                </div>
                <div>
                    <label htmlFor="flight_time">Villains</label>
                    <input {...register('flight_time')} name="flight_time" placeholder="Villains" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input {...register('description')} name="description" placeholder="Description" />
                </div>
                <div>
                    <label htmlFor="Origin">Origin</label>
                    <input {...register('Origin')} name="Origin" placeholder="Origin" />
                </div>
                <div>
                    <div>
                        <label htmlFor="series">Series</label>
                        <input {...register('series')} name="series" placeholder="Series" />
                    </div>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </div>
    )}

function chooseDescribtion(description: any): any {
    throw new Error('Function not implemented.');
}
