import React, { useEffect, useState } from "react"

export default function Clock() {  
  
  const [currentDate, updateCurrentDate] = useState(
    null)
    useEffect(() => {
      const date = new Date()
      const interval = setInterval(() => {
        updateCurrentDate(
          date.toLocaleTimeString()
        )
      }, 1000);
      return () => clearInterval(interval)
    }, [currentDate])

  return(
    <div>
      <div>      
        <div>
          <span>
            Digital Clock
          </span>
        </div>
        <span>          
          {currentDate}
        </span>
      </div>
    </div>    
  )
}
