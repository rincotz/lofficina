import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Serviços',
    paragraph: 'Realizamos diagnóstico, manutenção e reparo de automóveis de todas as marcas com excelência e dentro dos prazos acordados.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Engenheiro Responsável
                  </div>
                <h3 className="mt-0 mb-12">
                  Fábio Ramos da Silva
                  </h3>
                <p className="m-0">
                  Fábio é formado em engenharia mecânica pela Faculdade Armando Álvares Penteado (FAAP-SP) e tem mais de 25 anos de experiência com automóveis
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/174423365_10225883191372247_1802226106240997820_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RM3YNPubYkUAX-hSVa1&_nc_ht=scontent-gru1-2.xx&oh=72b7b5ae1070a264a4f059728aca66b3&oe=60CE1AEE'}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Profissionais
                  </div>
                <h3 className="mt-0 mb-12">
                  Equipe Lofficina
                  </h3>
                <p className="m-0">
                  Time de mecânicos especializados e treinados
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://previews.123rf.com/images/auremar/auremar2002/auremar200204636/141023460-male-and-female-mechanic-team-examine-car-engine.jpg'}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Estrutura
                  </div>
                <h3 className="mt-0 mb-12">
                  Lofficina
                  </h3>
                <p className="m-0">
                  Completo acervo de equipamentos e ferramentas para atender com rapidez e segurança
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://revistasalvador.com/wp-content/uploads/2019/01/car-Repair-Center.jpg'}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;