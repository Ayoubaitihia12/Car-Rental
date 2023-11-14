import React from 'react'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {FormItem,FormLabel,FormControl,FormDescription,FormField,FormMessage,Form} from '../../components/ui/form'
import {Button} from '../../components/ui/button'
import {Input} from '../../components/ui/input'
import { useNavigate } from 'react-router-dom'
 
const formSchema = z.object({
  email: z.string().email().min(2).max(30),
  password: z.string().min(8).max(30)
})

const Login = () => {

  const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values) {
        
        console.log(values);       
 
      }

    return (
        <>
            <Form {...form}>
                <div className="flex min-h-screen items-center justify-center">
                    <div className='flex flex-col p-6 w-full max-w-[600px] rounded-lg border shadow-md'>
                        
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                        </h2>

                        <div className="">
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                    <Input placeholder="exemple@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            </div>

                            <div>
                            <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type={'password'} placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            </div>

                            <div>
                            <Button className="w-full" type="submit">Submit</Button>
                            </div>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign Up
                            </a>
                        </p>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default Login