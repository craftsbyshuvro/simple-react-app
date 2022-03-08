import React, { useState } from 'react';
import { Tab, Table, Tabs } from 'react-bootstrap';
import { UserModel } from '../types/UserModel';

export default function User({ users }: { users: UserModel [] }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
 