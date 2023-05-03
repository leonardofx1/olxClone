import * as L from './linksStyled'



const Links = ({icon, desc}) => {

    return (
        <L.Li>
              <L.Ancora>
            <L.SpaanIcon>
                {icon}
            </L.SpaanIcon>
           <small> {desc}</small>
          </L.Ancora>
         
        </L.Li>
  
        
        
    )
}

export default Links