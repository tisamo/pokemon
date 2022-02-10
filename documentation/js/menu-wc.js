'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pokemon documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-38014daa51ee36f05abc6d1cac7c4e12f6c33bd51c2136db3f2edb53ed49f639b87b2603576ef5dd9eafacbb272aaa34957acfd41c4f0d0c3e19d4ab459fee14"' : 'data-target="#xs-components-links-module-AppModule-38014daa51ee36f05abc6d1cac7c4e12f6c33bd51c2136db3f2edb53ed49f639b87b2603576ef5dd9eafacbb272aaa34957acfd41c4f0d0c3e19d4ab459fee14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-38014daa51ee36f05abc6d1cac7c4e12f6c33bd51c2136db3f2edb53ed49f639b87b2603576ef5dd9eafacbb272aaa34957acfd41c4f0d0c3e19d4ab459fee14"' :
                                            'id="xs-components-links-module-AppModule-38014daa51ee36f05abc6d1cac7c4e12f6c33bd51c2136db3f2edb53ed49f639b87b2603576ef5dd9eafacbb272aaa34957acfd41c4f0d0c3e19d4ab459fee14"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PokemonCenterModule.html" data-type="entity-link" >PokemonCenterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PokemonCenterModule-e933bb0d6c863fed3e79cf7f20c2809f015293d4af198e1f7d221849d7c857ec9357ab0dd21f0a007ca1b00670a1b86072c5144195bd2a6dd002dda342a706e0"' : 'data-target="#xs-components-links-module-PokemonCenterModule-e933bb0d6c863fed3e79cf7f20c2809f015293d4af198e1f7d221849d7c857ec9357ab0dd21f0a007ca1b00670a1b86072c5144195bd2a6dd002dda342a706e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PokemonCenterModule-e933bb0d6c863fed3e79cf7f20c2809f015293d4af198e1f7d221849d7c857ec9357ab0dd21f0a007ca1b00670a1b86072c5144195bd2a6dd002dda342a706e0"' :
                                            'id="xs-components-links-module-PokemonCenterModule-e933bb0d6c863fed3e79cf7f20c2809f015293d4af198e1f7d221849d7c857ec9357ab0dd21f0a007ca1b00670a1b86072c5144195bd2a6dd002dda342a706e0"' }>
                                            <li class="link">
                                                <a href="components/PokemonCenterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PokemonCenterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectedPokemonModule.html" data-type="entity-link" >SelectedPokemonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectedPokemonModule-dfc89d58365be45e23f382a9ee10a8be0a351e81b6421087fb1e514707181b52f9d69c767b50d93a69d5d492890eb379fbbdc42392ade274f6a5545db0295e1c"' : 'data-target="#xs-components-links-module-SelectedPokemonModule-dfc89d58365be45e23f382a9ee10a8be0a351e81b6421087fb1e514707181b52f9d69c767b50d93a69d5d492890eb379fbbdc42392ade274f6a5545db0295e1c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectedPokemonModule-dfc89d58365be45e23f382a9ee10a8be0a351e81b6421087fb1e514707181b52f9d69c767b50d93a69d5d492890eb379fbbdc42392ade274f6a5545db0295e1c"' :
                                            'id="xs-components-links-module-SelectedPokemonModule-dfc89d58365be45e23f382a9ee10a8be0a351e81b6421087fb1e514707181b52f9d69c767b50d93a69d5d492890eb379fbbdc42392ade274f6a5545db0295e1c"' }>
                                            <li class="link">
                                                <a href="components/SelectedPokemonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectedPokemonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PokemonService.html" data-type="entity-link" >PokemonService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Pokemon.html" data-type="entity-link" >Pokemon</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});