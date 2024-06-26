import React, {useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import {CategoryContainer, Title} from "./category.styles";
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectIsLoading} from "../../store/categories/categories.selectors";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
    const { category } = useParams();
    const  categoriesMap  = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;