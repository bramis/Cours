# ~/.bashrc: executed by bash(1) for non-login shells.

# Note: PS1 and umask are already set in /etc/profile. You should not
# need this unless you want different defaults for root.
# PS1='${debian_chroot:+($debian_chroot)}\h:\w\$ '
# umask 022

parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\u@\h \[\033[32m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] $ "

# You may uncomment the following lines if you want `ls' to be colorized:
export LS_OPTIONS='-G'
export CLICOLOR=1
eval "‘dircolors‘"
alias ls='ls $LS_OPTIONS'

# Some more alias to avoid making mistakes:
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

alias l='ls'
alias ll='ls -l'
alias lla='ls -la'

alias reload_bash='. ~/.bash_profile'

# Wynd alias
alias wynd='cd ~/Project/wynd'
alias wynd_sass='~/./Scripts/wynd/sass_watcher.sh'

# Git alias
alias gb='git branch'
alias gst='git status'
alias gco='git checkout'
alias gcob='git checkout -b'
alias gc='git commit'
alias gca='git commit -a'
alias gcm='git commit -m'
alias gam='git commit --ammend'
alias gcam='git commit -am'
alias gp='git push'
alias gpf='git push -f'
alias gpori='git push origin -u'
alias gpfori='git push -f origin -u'
alias grb='git rebase'

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
