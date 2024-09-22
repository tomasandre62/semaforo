import React, {useEffect, useState} from 'react'


export const Semaforo = () => {

    const [color, setColor] = useState("rojo")
    const [activar, setActivar] = useState(false)


    const cambiaColor=(luz)=>{
        setColor(luz)
    }

    useEffect(() => {
        if(activar) {
            const interval = setInterval(() => {
                if(color == "rojo"){
                    setColor("verde")
                }else if(color == "verde"){
                    setColor("amarillo")
                }else if(color == "amarillo"){
                    setColor("rojo")
                }
            }, 3000)
            return ()=> clearInterval(interval)
        }
        
    },[activar, color])

  return (
    <main>
        <div className="poste"></div>
        <div className="caja">
            <div 
                className={`rojo ${color == "rojo" ? "encendido" : ""}`}
                onClick={()=>cambiaColor("rojo")}
            ></div>
            <div 
                className={`amarillo ${color == "amarillo" ? "encendido" : ""}`}
                onClick={()=>cambiaColor("amarillo")}
            ></div>
            <div 
                className={`verde ${color == "verde" ? "encendido" : ""}`}
                onClick={()=>cambiaColor("verde")}
            ></div>
        </div>
        <button onClick={()=>setActivar(!activar)}>Star / Stop</button>
    </main>
  )
}
