import React from 'react';
import $ from 'jquery';
import './styles.scss';

export default class HeaderMenu extends React.Component{
    constructor(){
        super();

        this.initialize = true;
        this.DOMcache = {};

    }

    componentDidMount(){
        var that = this;
        this.DOMcache = {
            firstli: $('.first-li'),
            lisearch: $('li.search'),
            window: $(window),
            stickyHeader: $('header')
        };

        this.DOMcache.window.scroll(function(){
            if($(this).scrollTop() > 150){
                that.DOMcache.stickyHeader.addClass('sticky-header');
                that.DOMcache.firstli.removeClass('animate1');
                that.DOMcache.firstli.addClass('animate2');
                that.DOMcache.lisearch.removeClass('visible-off');
                that.DOMcache.lisearch.addClass('visible-on');
            }else{
                that.DOMcache.stickyHeader.removeClass('sticky-header');
                that.DOMcache.firstli.removeClass('animate2');
                that.DOMcache.firstli.addClass('animate1');
                that.DOMcache.lisearch.removeClass('visible-on');
                that.DOMcache.lisearch.addClass('visible-off');
            }
        });
    }

    handleClick(){
        if(this.initialize){
            this.DOMcache.firstli.addClass('animate1');
            this.initialize = false;
        }else{
            this.DOMcache.firstli.toggleClass('animate1 animate2');
        }
        this.DOMcache.lisearch.toggleClass('visible-on visible-off');
    }


    render(){
        return (
            <div>
                <div id="header-info"></div>
                <header>
                    <nav>
                        <ul>
                            <li className='first-li animate1'>
                                <span>
                                    <img src="./app/logo.png" alt="pic" width='30' height='30' />
                                </span>
                            </li>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li className="search visible-off">
                                <div>
                                    <input type="text" placeholder='Search...' />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}
