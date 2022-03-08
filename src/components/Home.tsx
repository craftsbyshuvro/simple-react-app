import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { UserModel } from '../types/UserModel';
import { UserService } from '../types/UserService';
import User from './User';


export default function Home() {
    const [key, setKey] = useState<string>('home');
    const [users, setUsers] = useState<UserModel[]>([] as UserModel[]);
    const userService = new UserService();

    const getAllUsers = async () => {
        const users = await userService.getUsers();
        setUsers(users);
    }

    const onTabSelect = (k: string) => {
        setKey(k ? k : '');

        if (k == 'user') {
            getAllUsers();
        }
    }

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => onTabSelect(k ? k : '')}
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">
                <h2>This is Home</h2>
            </Tab>
            <Tab eventKey="user" title="User">
                <User users={users} />
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <h2>This is Contact</h2>
            </Tab>
        </Tabs>
    );
}
