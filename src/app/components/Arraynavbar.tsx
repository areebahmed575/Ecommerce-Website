import React from 'react'
export interface type {
    label: string,
    href: string,
    isDropDown: boolean,
    isDropDownData?: any
}
export const Arraynavbar: Array<type> =
    [
        {
            label: "Female",
            href: "/female/Female",
            isDropDown: true,
            isDropDownData: [{
                label: "Sweater",
                href: "/female/Sweater",
                isDropDown: false,


            },
            {
                label: "Pants",
                href: "/female/Pants",
                isDropDown: false,


            },

            {
                label: "Jackets",
                href: "/female/Jackets",
                isDropDown: false,


            },


            ]



        },
        {
            label: "Male",
            href: "/male/Male",
            isDropDown: true,
            isDropDownData: [{
                label: "Sweater",
                href: "/male/Sweater",
                isDropDown: false,


            },



            {
                label: "Jacket",
                href: "/male/Jackets",
                isDropDown: false,


            },
            {
                label: "Pants",
                href: "/female/Pants",
                isDropDown: false,


            }

            ]


        },
        {
            label: "Kid",
            href: "/kid/Shirt",
            isDropDown: false,
            // isDropDownData: [{
            //     label: "Shirt",
            //     href: "/kid/Shirt",
            //     isDropDown: false,


            // }],



        },
        {
            label: "All Products",
            href: "/products",
            isDropDown: false,



        }
    ]



