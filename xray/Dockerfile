FROM teddysun/xray

RUN wget \
      https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geoip.dat && \
      mv geoip.dat /usr/local/share/xray/geoip.dat
RUN wget \
      https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geosite.dat && \
      mv geosite.dat /usr/local/share/xray/geosite.dat

COPY ./xray/config.json /etc/xray/config.json