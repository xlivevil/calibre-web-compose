FROM v2fly/v2fly-core


RUN wget \
      https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geoip.dat && \
      mv geoip.dat /usr/local/share/v2ray/geoip.dat
RUN wget \
      https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geosite.dat && \
      mv geosite.dat /usr/local/share/v2ray/geosite.dat

COPY ./config.json /etc/v2ray/config.json
