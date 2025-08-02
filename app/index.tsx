import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constanst/Routes'
import MenuItem from '@/presentation/menu/MenuItem'
import ThemeView from '@/presentation/ThemeView'
import React from 'react'
import { View } from 'react-native'

const ComponentesApp = () => {
  return (
   <ThemeView margin>
        { animationMenuRoutes.map((route , index)=>(
            <MenuItem key={route.title} 
                title={route.title}
                icon={route.icon}
                name={route.name}
                isFirst ={ index === 0}
                isLast={index === animationMenuRoutes.length - 1 }
            
            />
        ))}
            <View className='my-3'/>
          { uiMenuRoutes.map((route , index)=>(
            <MenuItem key={route.title} 
                title={route.title}
                icon={route.icon}
                name={route.name}
                isFirst ={ index === 0}
                isLast={index === animationMenuRoutes.length - 1 }
            
            />
        ))}
                 <View className='my-3'/>
          { menuRoutes.map((route , index)=>(
            <MenuItem key={route.title} 
                title={route.title}
                icon={route.icon}
                name={route.name}
                isFirst ={ index === 0}
                isLast={index === animationMenuRoutes.length - 1 }
            
            />
        ))}
   </ThemeView>
  )
}

export default ComponentesApp