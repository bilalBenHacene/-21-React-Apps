import React, { useEffect, useState } from 'react'

const UseOutsideClickHook = ( ref, handler ) => {
    useEffect(() => {
        function listener(event) {
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        }
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

    }, [handler, ref])
    return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
    }
}

export default UseOutsideClickHook