import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { MainDescr } from '@/features/MainDescription';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <MainDescr />
        </Page>
    );
};

export default MainPage;
