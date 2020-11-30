import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {pageChanged} from '../../actions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './header.scss';

class Header extends Component {
    getItems(){
        const items = this.props.pages;
        console.log(items);
        return items.map((item, i) => {
            const clazz = this.props.activePage === item ? 'header__link active' : 'header__link';
            const linkTo = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return(
                <Link onClick={() => this.props.pageChanged(item)} className={clazz} to={linkTo}>
                    {item}
                </Link>
            )
        });
    }

    render(){
        const items = this.getItems();

        return (
            <header className="header">
                {items}
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pages: state.pages,
        activePage: state.activePage,
    }
}

const mapDispatchToProps = {
    pageChanged,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))

// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import {pageChanged} from '../../actions';
// import {withRouter} from 'react-router-dom';
// import {connect} from 'react-redux';

// import './header.scss';

// class Header extends Component {
//     getItems(){
//         const items = this.props.pages;
        
//         return items.map((item, i) => {
//             return(
//                 <Link className="header__link" to='/'>
//                     {item}
//                 </Link>
//             )
//         });
//     }

//     render(){
//         const items = this.getItems();

//         return (
//             <header className="header">
//                 {items}
//             </header>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         pages: state.pages,
//         activePage: state.activePage,
//     }
// }

// const mapDispatchToProps = {
//     pageChanged,
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));