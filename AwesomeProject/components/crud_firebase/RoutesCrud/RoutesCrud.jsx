import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CriarEstudante from "../estudante/CriarEstudante";
import HomeEstudantes from "../estudante/HomeEstudante";
import EditarEstudante from "../estudante/EditarEstudante";
import listarEstudantes from "../estudante/listarEstudantes";

import HomeProfessor from "../professor/HomeProfessor";
import ListarProfessor from "../professor/ListarProfessor";
import CriarProfessor from "../professor/CriarProfessor";
import EditarProfessor from "../professor/EditarProfessor";

const Stack = createNativeStackNavigator();
const RoutesCrud = ()=>{
    return(
        <Stack.Navigator>

            <Stack.Group>
            <Stack.Screen name="HomeEstudantes" component={HomeEstudantes} options={{title:'Home'}} />
            <Stack.Screen name="listarEstudantes" component={listarEstudantes} options={{title:'listar Estudantes'}} />
            <Stack.Screen name="CriarEstudante" component={CriarEstudante} options={{title:'Criar Estudante'}} />
            <Stack.Screen name="EditarEstudante" component={EditarEstudante} options={{title:'Editar Estudante'}} />
            </Stack.Group>

            <Stack.Group>
            <Stack.Screen name="HomeProfessor" component={HomeProfessor} options={{title:'Home Professor'}} />
            <Stack.Screen name="ListarProfessor" component={ListarProfessor} options={{title:'Listar Professor'}} />
            <Stack.Screen name="CriarProfessor" component={CriarProfessor} options={{title:'Criar Professor'}} />
            <Stack.Screen name="EditarProfessor" component={EditarProfessor} options={{title:'Editar aprofessor'}}/>
            </Stack.Group>

        </Stack.Navigator>
    )
}

export default RoutesCrud;