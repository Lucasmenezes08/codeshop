import Autocomplete from '@mui/material/Autocomplete';
import { ProductData } from '../../product/dataProduct';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { useState } from 'react';


const listData = ['All','BackEnd','FrontEnd','Fullstack','DataScience'];
const listPrice = ProductData.map((value) => value.preco);
const minValue = Math.min(...listPrice);
const maxValue = Math.max(...listPrice);


export default function Filter (){

    const [value , setValue] = useState([minValue,maxValue]);


    function handleChange (event , newValue){
        setValue(newValue)
    }

    function formatValue (){
        return `R$ ${value}`
    }
    
    return (
        <section className='w-[18vw] px-3 flex flex-col items-start justify-center '>
            <h3 className='text-lg font-bold py-2'>
                Filters
            </h3>
            <section>
                <p className='font-light pb-4 pt-3'>Categorias</p>
                <Autocomplete 
                    disablePortal
                    options={listData}
                    sx={{width: 235}}
                    renderInput={(params) => <TextField {...params} label='Tópicos' size="small"/>}
                />
            </section>

            <section className='py-6'>
                <p className='pb-2 font-light'>Faixa de preço</p>

                <section className='flex flex-col justify-center'>

                    <Slider 
                        getAriaLabel={() => 'Temperature range'}
                        min={minValue}
                        max={maxValue}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={formatValue}
                        sx={{width: 230}}
                    />
                    <section className='flex flex-row justify-between'>
                        <p className='text-sm font-light'>R$ {minValue}</p>
                        <p className='text-sm font-light'>R$ {maxValue} +</p>
                    </section>
                </section>
                
            </section>

            <button className='w-60 h-8 bg-gray-200 rounded-sm font-semibold flex justify-center items-center cursor-pointer hover:bg-gray-300'>Limpar filtro</button>
        </section>
    )
}