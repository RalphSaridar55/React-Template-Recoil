import React from 'react';

const Container = ({ children,className, ...props }) => {

    const styles = {
        display: 'flex',
        flexDirection: props.row ? 'row' : 'column',
        ...props.margin ? { margin: props.margin } : { margin: '40px 30px' },
        ...props.center && { alignItems: 'center', justifyContent: 'center' },
        ...props.centerV && { alignItems: 'center' },
        ...props.centerH && { justifyContent: 'center' },
        ...props.space && { justifyContent: 'space-between' },
        ...props.maxWidth && { maxWidth:props.maxWidth },
        ...props.minWidth && { minWidth:props.minWidth },
        ...props.width && { width:props.width },
        height: props.height ? props.height : '100vh',
        ...props.color && { backgroundColor: props.color },
        ...props.radius && {borderRadius:props.radius},
        ...props.bg && {
            backgroundImage: `url(${props.bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }

    return (
        <div style={styles} className='container'>
            {children}
        </div>
    )
}

export default Container