import { db } from '../firebase/config'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export const useAuthentication = () => {
    const [error, setErrors] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setErrors(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            if (loading === false) {
                toast.success('Seu cadastro foi realizado!');
            }

            return user

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage

            if (error.message.includes("password")) {
                toast.error('A senha precisa ter pelo menos 6 caracteres.')
            } else if (error.message.includes("email-already")) {
                toast.error('E-mail já cadastrado!')
            } else {
                toast.error('Ocorreu um erro no sistema, tente novamente mais tarde...')
            }

            setLoading(false)
            setErrors(systemErrorMessage)
        }


    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading
    }
}
