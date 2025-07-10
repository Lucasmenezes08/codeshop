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
        <section className='w-[18vw]'>
            <h3>
                Filters
            </h3>
            <section>
                <p>Categorias</p>
                <Autocomplete 
                    disablePortal
                    options={listData}
                    sx={{width: 230}}
                    renderInput={(params) => <TextField {...params} label='Tópicos' size="small"/>}
                />
            </section>

            <section>
                <p>Faixa de preço</p>

                <section>

                    <Slider 
                        getAriaLabel={() => 'Temperature range'}
                        min={minValue}
                        max={maxValue}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={formatValue}
                        sx={{width: 200}}
                    />
                    <section className='flex flex-row justify-between'>
                        <p>R$ {minValue}</p>
                        <p>R$ {maxValue} +</p>
                    </section>
                </section>
                
            </section>

            <button>Limpar filtro</button>
        </section>
    )
}