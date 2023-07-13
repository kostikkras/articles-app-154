import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HeaderDescription } from '@/shared/ui/redesigned/HeaderDescription';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './MainDescr.module.scss';

interface AboutMeProps {
    className?: string;
}

export const MainDescr = ({ className }: AboutMeProps) => {
    const { t } = useTranslation('main');

    return (
        <HStack
            gap="16"
            max
            className={classNames(cls.AboutMe, {}, [className])}
            id="aboutMe"
        >
            <div className={cls.sectionAbout}>
                <HeaderDescription
                    description={t('about_me_description')}
                    enter={t('enter')}
                    username={t('username')}
                    password={t('password')}
                    size="l"
                />
            </div>
        </HStack>
    );
};
