import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contect api/Context"

const PrivateRoute = ({component:RouteComponent,...rest}) => {
 const {user} = useAuth();

 console.log(user)
return(
    <Route 
    {...rest}
     render = {routeprops => 
                   {
                   return  user ? (
                       <Redirect to = "/home" />

                    ): (
                       <RouteComponent {... routeprops} />
                    )
                   }
    }
    
    >
        
    </Route>
)

}

export default PrivateRoute;