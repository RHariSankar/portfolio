import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';


const inlineIconCss = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: '1vw'
};
const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: '0.5vw',
    marginLeft: '0.5vw',
    fontSize: 17
}
export default function LineWithIcon(props) {
    console.log(props)
    const { text, github, document } = props
    // console.log("github", github)
    // console.log("document", document)
    if (github === undefined && document === undefined) {
        return (
            <div style={inlineIconCss}>
                {text}
            </div>
        )
    }
    else if (document === undefined) {
        return (
            <div style={inlineIconCss}>
                {text}<a href={github} target="_blank" rel="noreferrer"><GitHubIcon sx={iconStyle} /></a>
            </div>
        )
    }
    else if (github === undefined) {
        return (
            <div style={inlineIconCss}>
                {text} <a href={document} target="_blank" rel="noreferrer"><ArticleIcon sx={iconStyle} /></a>
            </div>
        )
    }
    else {
        return (
            <div style={inlineIconCss}>
                {text} <a href={github} target="_blank" rel="noreferrer"><GitHubIcon sx={iconStyle} /></a> <a href={document} target="_blank" rel="noreferrer"><ArticleIcon sx={iconStyle} /></a>
            </div>
        )
    }
}