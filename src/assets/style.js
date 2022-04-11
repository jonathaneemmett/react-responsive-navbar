import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    '@global':{
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: "border-box"
        },
        body: {
            fontFamily: "cursive"
        },
        a: {
          textDecoration: "none"
        },
        li: {
            listStyle: "none"
        }
    },
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "teal",
        color: "#ffffff"
    },
    navLinks: {
        '& a':{
            color: "#ffffff"
        },
        '& input[type=checkbox]':{
            display: "none"
        },
        '@media (max-width: 768px)': {
            '& input[type=checkbox]:checked ~ $menu': {
                display: "block"
            }
        }
    },
    hamburger: {
        display: "none",
        fontSize: "24px",
        userSelect: "none",
        '@media (max-width: 768px)': {
            display: "block"
        }
    },
    // Logo
    logo: {
        fontSize: "32px"
    },
    menu: {
        display: "flex",
        gap: "1em",
        fontSize: "18px",
        '& li': {
          padding: "5px 14px"
        },
        '& li:hover': {
            backgroundColor: "#4c9e9e",
            borderRadius: "5px",
            transition: "0.3s ease"
        },
        '@media (max-width: 768px)': {
            display: "none",
            position: "absolute",
            backgroundColor: "teal",
            right: 0,
            left: 0,
            textAlign: "center",
            padding: "16px 0",
            '& li:hover': {
                display: "inline-block",
                backgroundColor: "#4c9e9e",
                transition: "0.3s ease"
            },
            '& li+li': {
                marginTop: "12px"
            },
        }
    },
    // Dropdown menu
    services: {
        position: "relative",
        '&:hover $dropdown':{
            display: "block"
        }
    },
    dropdown: {
        backgroundColor: "rgb(1, 139, 139)",
        padding: "1em 0",
        position: "absolute",
        display: "none",
        borderRadius: "8px",
        top: "35px",
        '& li': {
          padding: "0.5em 1em",
          width: "8em",
          textAlign: "center"
        },
        '& li+li': {
            marginTop: "10px"
        },
        '& li:hover': {
            backgroundColor: "#4c9e9e"
        },
        '@media (max-width: 768px)': {
            left: "50%",
            top: "30px",
            transform: "translate(35%)",
            '& li:hover': {
                backgroundColor: "#4c9e9e"
            },
        }
    }
})