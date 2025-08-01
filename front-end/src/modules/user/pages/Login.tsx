import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import { loginSchema } from "../validations/register-validation";
import { doLogin } from "../api/user-api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState } from "react";
import {Angry} from 'lucide-react';

const Login = ()=>{
    const [message, setMessage] = useState('');
    const {register, handleSubmit, formState:{errors}} = useForm({
            resolver: zodResolver(loginSchema),
            defaultValues:{
                email : '',
                password: ''
              
            }
        });
         const alertJSX = <div>
                <Alert variant="default">
 
  <AlertTitle></AlertTitle>
  <AlertDescription>
   {message}
  </AlertDescription>
</Alert>
            </div>;
        const mySubmit = async (userObject)=>{
                try{
                const result= await doLogin(userObject);;
                
                         console.log('Result ', result);
                        if(result.data.message){
                            localStorage.role = result.data.role;
                            localStorage.token = result.data.token;
                            setMessage(result.data.message);
                           console.log(result.data.message);
                        }
                        else{
                             setMessage(result.data.message);
                            console.log(result.data.message);
                        }
                    }
                    catch(err){
                        console.log('Login fails ', err);
                    }
        }
    return (<Card className="w-full max-w-md mx-auto">
        <CardHeader>
            <CardTitle className="space-y-1 text-center">Login Here</CardTitle>
            <CardDescription className="text-center">Music App Login Form</CardDescription>
        </CardHeader>
        <CardContent>
           <form onSubmit={handleSubmit(mySubmit)}>
            {alertJSX}
        <div className="grid w-full max-w-sm items-center gap-3">
             <Label htmlFor="email">Email</Label>
             <Input {...register('email')} type="email" id="email" placeholder="Email" />
        <span className="text-red-500">{errors.email && errors.email.message}</span>
    </div>
     <div className="grid w-full max-w-sm items-center gap-3">
             <Label htmlFor="password">Password</Label>
             <Input {...register('password')} type="password" id="password" placeholder="Password" />
         <span className="text-red-500">{errors.password && errors.password.message}</span>
    </div>
     
    <br />
    <div className="grid w-full max-w-sm items-center gap-3">
            <Button>Login</Button>
    </div>

           </form>
        </CardContent>
        
    </Card>);
}
export default Login;