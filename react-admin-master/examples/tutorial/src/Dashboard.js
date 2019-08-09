import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        <CardHeader title="My Card1" />
        <CardContent>This is my card1.</CardContent>
        <CardHeader title="My Card2" />
        <CardContent>This is my card2.</CardContent>
    </Card>
);
