export const configNumber = (data) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data);
}

export const configString = (data) => {
    const rs = (data + '').charAt(0).toLocaleUpperCase() + (data + '').slice(1);
    return rs;
}

export const roleConfig = {
    users: ['client', 'waiter', 'admin', 'chef'],
    saleoff: ['free', 'notfree']
}

export const configField = {
    users: {
        gender: {
            type: 'select',
            data: ['male', 'female'],
            visiable: true, // display
            create: true, // 
        },
        role: {
            type: 'select',
            data: Object.values(roleConfig?.users),
            visiable: true,
            create: true,
        },
        address: {
            type: 'text',
            visiable: true,
            create: true,
        },
        isActive: {
            type: 'select',
            data: ['true', 'false'],
            visiable: true,
            create: false,
        },
        isLock: {
            type: 'select',
            data: ['true', 'false'],
            visiable: true,
            create: false,
        },
        username: {
            type: 'text',
            visiable: true,
            create: true,
        },
        email: {
            type: 'email',
            visiable: false,
            create: true,
        },
        password: {
            type: 'password',
            visiable: false,
            create: true,
        },
        phone: {
            type: 'phone',
            visiable: false,
            create: true,
        },
        createdAt: {
            type: 'date',
            visiable: false,
        },
        updatedAt: {
            type: 'date',
            visiable: false,
        }
    },
    saleoff: {
        name: {
            type: 'text',
            visiable: true,
            create: true
        },
        image: {
            type: 'text',
            visiable: true,
            create: true
        },
        contents: {
            type: 'text',
            visiable: true,
            create: true
        },
        timestart: {
            type: 'date',
            visiable: true,
            create: true
        },
        timeend: {
            type: 'date',
            visiable: true,
            create: true
        },
        createdAt: {
            type: 'date',
            visiable: false,
        },
        updatedAt: {
            type: 'date',
            visiable: false,
        }
    }
}

export const configDate = (data) => {
    const tmpDate = (data + '').split('T');
    return tmpDate[0];
}

export const configOrderPending = (data) => {
    const createdat = data?.createdAt;
    let food = '';
    data?.dishes.map((item) => {
        food = food + item.name + '\n';
    })
    console.log(food);
    let quantity = '';
    data?.quantity.map((item) => {
        quantity = quantity + item + '\n';
    })
    let total;
    data?.dishes.map((item, index) => {
        total += data?.quantity.indexOf(index) * item.price;
    });
    console.log(total);
}